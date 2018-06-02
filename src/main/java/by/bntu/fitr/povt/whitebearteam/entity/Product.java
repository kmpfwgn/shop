package by.bntu.fitr.povt.whitebearteam.entity;

public class Product {

    private String name;
    private String cost;
    private String image;
    private String description;
    private String brand;
    private String country;
    private String articul;
    private String type;

    public Product(String name, String cost, String image, String description, String brand, String country, String articul, String type) {
        this.name = name;
        this.cost = cost;
        this.image = image;
        this.description = description;
        this.brand = brand;
        this.country = country;
        this.articul = articul;
        this.type = type;
    }

    public Product() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getArticul() {
        return articul;
    }

    public void setArticul(String articul) {
        this.articul = articul;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
