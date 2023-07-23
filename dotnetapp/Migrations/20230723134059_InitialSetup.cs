using Microsoft.EntityFrameworkCore.Migrations;

namespace dotnetapp.Migrations
{
    public partial class InitialSetup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AddOns",
                columns: table => new
                {
                    addOnId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    addOnName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    addOnDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    addOnPrice = table.Column<long>(type: "bigint", nullable: false),
                    addOnImageURL = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AddOns", x => x.addOnId);
                });

            migrationBuilder.CreateTable(
                name: "Menus",
                columns: table => new
                {
                    foodMenuId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    foodMenuImageURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    foodMenuType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    foodMenuItems = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    foodMenuCost = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menus", x => x.foodMenuId);
                });

            migrationBuilder.CreateTable(
                name: "Themes",
                columns: table => new
                {
                    themeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    themeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    themeImageURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    themeAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    themeDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    themePhotographer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    themeVideographer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    themeReturnGift = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    themeCost = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Themes", x => x.themeId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mobileNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userRole = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.userId);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    eventId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    applicantAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    applicantEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    applicantMobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    applicantName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    eventAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    eventDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    eventTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EventCost = table.Column<long>(type: "bigint", nullable: false),
                    noOfPeople = table.Column<long>(type: "bigint", nullable: false),
                    themeId = table.Column<int>(type: "int", nullable: false),
                    addOnIds = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userId = table.Column<int>(type: "int", nullable: false),
                    eventmenuIds = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.eventId);
                    table.ForeignKey(
                        name: "FK_Events_Themes_themeId",
                        column: x => x.themeId,
                        principalTable: "Themes",
                        principalColumn: "themeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Events_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "userId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Events_themeId",
                table: "Events",
                column: "themeId");

            migrationBuilder.CreateIndex(
                name: "IX_Events_userId",
                table: "Events",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AddOns");

            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "Menus");

            migrationBuilder.DropTable(
                name: "Themes");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
