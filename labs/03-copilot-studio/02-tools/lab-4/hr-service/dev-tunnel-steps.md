# Steps to use dev tunnel

![The HR-Services connector in the cloud calls the public URL of the hr-service dev tunnel, which reaches the devtunnel host process and the HR Service API on localhost:7071 on your machine, with the four devtunnel commands listed in order below.](../_images/dev-tunnel-bridge.svg)

To use dev tunnel for this Azure Function app you need to:

- Install dev tunnel on your environment: https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/get-started?tabs=macos
- Login with dev tunnel, executing the following command:

```console
devtunnel user login
```

- Host your dev tunnel, executing the following commands:

```console
devtunnel create hr-service -a --host-header unchanged
devtunnel port create hr-service -p 7071
devtunnel host hr-service
```
