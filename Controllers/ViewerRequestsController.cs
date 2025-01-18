using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

[ApiController]
[Route("api/[controller]")]
public class ViewerRequestsController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public ViewerRequestsController(IConfiguration configuration)
    {
        _configuration = configuration; // Inject configuration for connection strings
    }

    [HttpPost]
    public IActionResult SaveRequest([FromBody] ViewerRequest request)
    {
        // Validate incoming data
        if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.StyleName))
        {
            return BadRequest("Invalid data. Email and StyleName are required.");
        }

        try
        {
            // Retrieve connection string from appsettings.json
            var connectionString = _configuration.GetConnectionString("AzureSqlConnection");

            using (var connection = new SqlConnection(connectionString))
            {
                // SQL query to insert data
                var query = "INSERT INTO [dbo].[Viewer_Requests] (Style_Name, Viewer_Email) VALUES (@StyleName, @Email)";
                var command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@StyleName", request.StyleName);
                command.Parameters.AddWithValue("@Email", request.Email);

                connection.Open();
                command.ExecuteNonQuery();
            }

            return Ok("Request saved successfully.");
        }
        catch (Exception ex)
        {
            // Handle errors gracefully
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}

// Define the model for incoming JSON data
public class ViewerRequest
{
    public string StyleName { get; set; } // Matches the "Style_Name" column
    public string Email { get; set; }    // Matches the "Viewer_Requests" column
}
