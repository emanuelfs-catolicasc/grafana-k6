import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 10,
    duration: '30s',
};

export default function () {
    console.log("REMOTE URL:", __ENV.K6_PROMETHEUS_REMOTE_URL);
    console.log("REMOTE WRITE:", __ENV.K6_PROMETHEUS_REMOTE_WRITE);

    let res = http.get('https://quickpizza.grafana.com');
    check(res, { "status is 200": (res) => res.status === 200 });
    sleep(1);
}
