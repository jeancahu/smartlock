from django.shortcuts import render
from django.views.decorators.http import require_GET

# Create your views here.
@require_GET
def index(request):
    context={
    }
    return render(request, 'index.html', context)
