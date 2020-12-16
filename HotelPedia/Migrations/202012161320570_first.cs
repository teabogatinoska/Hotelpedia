namespace HotelPedia.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Hotels", "image_url", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Hotels", "image_url");
        }
    }
}
