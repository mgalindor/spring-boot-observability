import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 1 },
    { duration: '1m', target: 2 },
    { duration: '1m', target: 10 },
    { duration: '1m', target: 20 },
  ],
};

export default function () {
  var server_list = ["app-a:8080", "app-b:8080", "app-c:8080"]
  var endpoint_list = ["/", "/io_task", "/cpu_task", "/random_sleep", "/random_status", "/chain", "/error_test"]
  server_list.forEach(function(server) {
    endpoint_list.forEach(function(endpoint) {
      http.get("http://" + server + endpoint);
    });
  });
}
