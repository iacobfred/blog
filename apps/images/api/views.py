from apps.images.api.serializers import ImageDrfSerializer
from apps.images.models import Image
from core.api.views import ExtendedModelViewSet


class ImageViewSet(ExtendedModelViewSet):
    """API endpoint for viewing and editing images."""

    queryset = Image.objects.all()
    serializer_class = ImageDrfSerializer
    list_fields = None
