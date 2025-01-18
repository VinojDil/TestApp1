var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Enable serving static files from the wwwroot folder
app.UseStaticFiles();

// Redirect requests to index.html if no route matches
app.MapFallbackToFile("index.html");

app.Run();