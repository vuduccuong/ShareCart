using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VirtualShopping.DAL.Implement.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerId = table.Column<string>(type: "varchar(6)", unicode: false, maxLength: 6, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false),
                    Avatar = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    IsActived = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerId);
                });

            migrationBuilder.CreateTable(
                name: "Shops",
                columns: table => new
                {
                    ShopId = table.Column<string>(type: "varchar(6)", unicode: false, maxLength: 6, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActived = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shops", x => x.ShopId);
                });

            migrationBuilder.CreateTable(
                name: "Carts",
                columns: table => new
                {
                    CartId = table.Column<string>(type: "varchar(6)", unicode: false, maxLength: 6, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeliveryTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeliveryInformation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShopId = table.Column<string>(type: "varchar(6)", unicode: false, nullable: true),
                    CustomerId = table.Column<string>(type: "varchar(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carts", x => x.CartId);
                    table.ForeignKey(
                        name: "FK_Carts_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Carts_Shops_ShopId",
                        column: x => x.ShopId,
                        principalTable: "Shops",
                        principalColumn: "ShopId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    ItemId = table.Column<string>(type: "nvarchar(6)", maxLength: 6, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    ShopId = table.Column<string>(type: "varchar(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.ItemId);
                    table.ForeignKey(
                        name: "FK_Items_Shops_ShopId",
                        column: x => x.ShopId,
                        principalTable: "Shops",
                        principalColumn: "ShopId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CartsItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", maxLength: 6, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    CustomerId = table.Column<string>(type: "varchar(6)", nullable: true),
                    CartId = table.Column<string>(type: "varchar(6)", unicode: false, nullable: true),
                    ItemId = table.Column<string>(type: "nvarchar(6)", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ReadyToOrder = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartsItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartsItems_Carts_CartId",
                        column: x => x.CartId,
                        principalTable: "Carts",
                        principalColumn: "CartId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CartsItems_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CartsItems_Items_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Items",
                        principalColumn: "ItemId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Carts_CustomerId",
                table: "Carts",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_ShopId",
                table: "Carts",
                column: "ShopId");

            migrationBuilder.CreateIndex(
                name: "IX_CartsItems_CartId",
                table: "CartsItems",
                column: "CartId");

            migrationBuilder.CreateIndex(
                name: "IX_CartsItems_CustomerId",
                table: "CartsItems",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CartsItems_ItemId",
                table: "CartsItems",
                column: "ItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_PhoneNumber",
                table: "Customers",
                column: "PhoneNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Items_ShopId",
                table: "Items",
                column: "ShopId");

            migrationBuilder.CreateIndex(
                name: "IX_Shops_PhoneNumber",
                table: "Shops",
                column: "PhoneNumber",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartsItems");

            migrationBuilder.DropTable(
                name: "Carts");

            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Shops");
        }
    }
}
