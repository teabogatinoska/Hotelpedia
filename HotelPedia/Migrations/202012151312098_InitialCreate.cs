namespace HotelPedia.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Hotels",
                c => new
                    {
                        id = c.Long(nullable: false, identity: true),
                        name_mk = c.String(),
                        name_ang = c.String(),
                        starsNum = c.Int(nullable: false),
                        price = c.Double(nullable: false),
                        breakfast_included = c.Boolean(nullable: false),
                        free_cancellation = c.Boolean(nullable: false),
                        swimming_pool = c.Boolean(nullable: false),
                        parking = c.Boolean(nullable: false),
                        wifi = c.Boolean(nullable: false),
                        smoking = c.Boolean(nullable: false),
                        disabled_guest = c.Boolean(nullable: false),
                        pets = c.Boolean(nullable: false),
                        distance_center = c.Double(nullable: false),
                        distance_airport = c.Double(nullable: false),
                        street = c.String(),
                        postcode = c.Long(nullable: false),
                        city = c.String(),
                        website = c.String(),
                        email = c.String(),
                        phone = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Hotels");
        }
    }
}
