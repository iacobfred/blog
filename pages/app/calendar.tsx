import CalendarViewer from "@/components/Calendar";
import Layout from "@/components/Layout";
import { GET_CALENDAR_EVENTS } from "@/graphql/queries";
import { Calendar, CalendarEvent } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { NetworkStatus, useQuery } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useState } from "react";

interface CalendarPageProps {
  dateISO: string;
  session: Session;
}

const CalendarPage: NextPage<CalendarPageProps> = (props: CalendarPageProps) => {
  const { dateISO } = props;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date(dateISO));
  const { loading, error, data, fetchMore, refetch, networkStatus } = useQuery(
    GET_CALENDAR_EVENTS,
    {
      variables: {
        userId: session?.user?.id,
      },
      // Setting this value to true makes the component rerender when "networkStatus" changes,
      // so we are able to know if it is fetching more data.
      // notifyOnNetworkStatusChange: true,
    }
  );
  const loadingItems = networkStatus === NetworkStatus.fetchMore;

  if (!session) return null;
  if (loadingItems) return <p>{"Loading..."}</p>;
  if (error) return <p>{"Error loading data."}</p>;

  const { calendars } = data;
  const calendarEvents: CalendarEvent[] = [];
  console.log("Building list of calendar events...");
  calendars.forEach(
    (
      calendar: Calendar & {
        events: CalendarEvent[];
      }
    ) => {
      calendar.events.forEach((event: CalendarEvent) => {
        calendarEvents.push(event);
      });
    }
  );
  if (calendars.length === 0) {
    console.error("No calendars found.");
    return null;
  }
  console.log("Finished building list of calendar events.");
  return (
    <Layout>
      <NextSeo
        title={"Calendar"}
        canonical={"/app/calendar"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} lg={6}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                <CalendarViewer
                  date={date}
                  setDate={setDate}
                  calendars={calendars}
                  session={session}
                  refetch={refetch}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default CalendarPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/calendar`,
        permanent: false,
      },
    };
  }
  const today = new Date();
  const props: CalendarPageProps = {
    dateISO: today.toISOString(),
    session,
  };
  await apolloClient
    .query({
      query: GET_CALENDAR_EVENTS,
      variables: {
        userId: session.user.id,
      },
    })
    .catch((e) => {
      console.error(e.networkError?.result?.errors);
    });
  return addApolloState(apolloClient, { props });
};
