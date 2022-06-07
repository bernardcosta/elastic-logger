# API Reference

### Environment Variables
The server uses `.env` file to look for specific environment variables.
1. `ES_SERVER=<host>:<port>` (required). This variable is used to locate the elasticsearch instance to write to
2. `NODE_LISTEN=<host>:<port-in>:<port-out>` (optional). If hosting on a docker container, this field is required in order to bind the host port to guest and  be able to discover the server outside of docker.
3. `APP_PORT=<port>` (optional). Defaults to `3000` in server.

:::tip Note 
If using both `NODE_LISTEN` and `APP_PORT`, `<port-out>` in `NODE_LISTEN` must be the same as `APP_PORT`.
:::

The `.env` file is not committed to the repo since it is host machine specific. `.env.example` shows an example of the contents of this file.

### POST /level/channel

Use this endpoint to log results to `elasticsearch` server instance.

Example:
```shell script
curl --request POST \
  --url <your_url>/DEBUG/MyApp \
  --header 'Content-Type: application/json' \
  --data '{
        	"code": 200,
        	"message": "dev/testing API",
            "another_key": "another_value"
        }'
```

 - The `level` path parameter should contain the log level choice. It can be one of: 
    - `DEBUG`
    - `INFO`
    - `WARNING`
    - `ERROR`
    - `CRITICAL`
 - The `channel` path parameter can contain any string that categorises the log. For example an app or project name the log belongs to.
 - The `url` should contain the correct hostname.
 - The `data` json field can contain any set of key value pairs you want to log.
  