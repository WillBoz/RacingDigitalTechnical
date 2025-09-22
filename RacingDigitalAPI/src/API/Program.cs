using API;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowAngularDevClient",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
        }
    );
});

Startup startup = new Startup();
startup.ConfigureServices(builder.Services);

WebApplication app = builder.Build();
startup.Configure(app, app.Environment);

app.UseCors("AllowAngularDevClient");

app.Run();
