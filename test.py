import requests

url = "http://localhost:3000/"
r = requests.get(url)
print("[TEST] GET / =>", r.status_code)

r = requests.post(url+"/api/users", data={"user": "admin", "password": "admin"})
print("[TEST] POST /api/users =>", r.status_code)

r = requests.get(url+"/api/users")
print("[TEST] GET /api/users =>", r.status_code)

r = requests.get(url+"/api/users/admin")
print("[TEST] GET /api/users/admin =>", r.status_code)

r = requests.post(url + "/api/login", data={"user": "admin", "password": "admin"})
print("[TEST] POST /api/login =>", r.status_code, r.cookies)

r =requests.put (url + "/api/users", data={"user": "admin", "password": "admin"})
print("[TEST] PUT /api/users =>", r.status_code)

cookie = r.cookies
user = cookie.get("user")