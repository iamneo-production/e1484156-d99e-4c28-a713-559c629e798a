using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
var myAllowSpecificOrigin = "_myAllowSpecificOrigin";

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "dotnetapp", Version = "v1" });
});
builder.Services.AddDbContext<DataContext>(option => 
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("myconnstring"));
});
builder.Services.AddCors(option => 
{
    option.AddPolicy(name: myAllowSpecificOrigin, builder => 
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "dotnetapp v1");
    });
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCors(option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseAuthorization();
app.MapControllers();
app.Run();
