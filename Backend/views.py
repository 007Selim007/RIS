from django.http import JsonResponse

def index(request):
    data = {"nom": "selim"}
    return JsonResponse(data)
