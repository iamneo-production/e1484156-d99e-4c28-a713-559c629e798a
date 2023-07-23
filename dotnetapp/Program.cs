using dotnetapp.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

var hostBuilder = CreateHostBuilder(args);
var host = hostBuilder.Build();
host.Run();

static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
