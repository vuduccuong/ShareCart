// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VirtualShopping.DAL.Implement.Data;

namespace VirtualShopping.DAL.Implement.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Cart", b =>
                {
                    b.Property<string>("CartId")
                        .HasMaxLength(6)
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<string>("CustomerId")
                        .HasColumnType("varchar(6)");

                    b.Property<string>("DeliveryInformation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("DeliveryTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("OrderTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("ShopId")
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CartId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("ShopId");

                    b.ToTable("Carts");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.CartItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(6)
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Amount")
                        .HasColumnType("int");

                    b.Property<string>("CartId")
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<string>("CustomerId")
                        .HasColumnType("varchar(6)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("ItemId")
                        .HasColumnType("nvarchar(6)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<bool>("ReadyToOrder")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("CartId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("ItemId");

                    b.ToTable("CartsItems");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Customer", b =>
                {
                    b.Property<string>("CustomerId")
                        .HasMaxLength(6)
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<string>("Avatar")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<bool>("IsActived")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(15)
                        .IsUnicode(false)
                        .HasColumnType("varchar(15)");

                    b.HasKey("CustomerId");

                    b.HasIndex("PhoneNumber")
                        .IsUnique();

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Item", b =>
                {
                    b.Property<string>("ItemId")
                        .HasMaxLength(6)
                        .HasColumnType("nvarchar(6)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("ShopId")
                        .HasColumnType("varchar(6)");

                    b.HasKey("ItemId");

                    b.HasIndex("ShopId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Shop", b =>
                {
                    b.Property<string>("ShopId")
                        .HasMaxLength(6)
                        .IsUnicode(false)
                        .HasColumnType("varchar(6)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActived")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.HasKey("ShopId");

                    b.HasIndex("PhoneNumber")
                        .IsUnique();

                    b.ToTable("Shops");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Cart", b =>
                {
                    b.HasOne("VirtualShopping.Domain.Entities.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("VirtualShopping.Domain.Entities.Shop", "Shop")
                        .WithMany()
                        .HasForeignKey("ShopId");

                    b.Navigation("Customer");

                    b.Navigation("Shop");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.CartItem", b =>
                {
                    b.HasOne("VirtualShopping.Domain.Entities.Cart", "Cart")
                        .WithMany("ItemsInCart")
                        .HasForeignKey("CartId");

                    b.HasOne("VirtualShopping.Domain.Entities.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("VirtualShopping.Domain.Entities.Item", "Item")
                        .WithMany("CartItemList")
                        .HasForeignKey("ItemId");

                    b.Navigation("Cart");

                    b.Navigation("Customer");

                    b.Navigation("Item");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Item", b =>
                {
                    b.HasOne("VirtualShopping.Domain.Entities.Shop", null)
                        .WithMany("Items")
                        .HasForeignKey("ShopId");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Cart", b =>
                {
                    b.Navigation("ItemsInCart");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Item", b =>
                {
                    b.Navigation("CartItemList");
                });

            modelBuilder.Entity("VirtualShopping.Domain.Entities.Shop", b =>
                {
                    b.Navigation("Items");
                });
#pragma warning restore 612, 618
        }
    }
}
