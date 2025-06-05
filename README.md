```shell
set SCRIPTPATH=%cd%\scripts

docker run --rm ^
  -v %SCRIPTPATH%:/scripts ^
  -e K6_PROMETHEUS_REMOTE_URL=http://localhost:9090/api/v1/write ^
  -e K6_PROMETHEUS_REMOTE_WRITE=true ^
  registry-docker.weg.net/grafana/k6:1.0.0 run /scripts/test.js
```
