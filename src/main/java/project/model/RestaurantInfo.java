package project.model;

public class RestaurantInfo {

  private boolean open;
  private String restaurantName;
  private String description;
  private String imageUrl;


  public RestaurantInfo() {
  }

  public RestaurantInfo(boolean open, String restaurantName, String description,
      String imageUrl) {
    this.open = open;
    this.restaurantName = restaurantName;
    this.description = description;
    this.imageUrl = imageUrl;

  }

  public boolean isOpen() {
    return open;
  }

  public void setOpen(boolean open) {
    this.open = open;
  }

  public String getRestaurantName() {
    return restaurantName;
  }

  public void setRestaurantName(String restaurantName) {
    this.restaurantName = restaurantName;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }


 
  @Override
  public String toString() {
    return "RestaurantInfo{" +
        "open=" + open +
        ", restaurantName='" + restaurantName + '\'' +
        ", description='" + description + '\'' +
        ", imageUrl='" + imageUrl + '\'' +
   
        '}';
  }
}
