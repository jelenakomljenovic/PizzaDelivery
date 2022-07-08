package project.model;

public class Seller extends User {

  public Seller() {
    this.setType("driver");
  }

  public Seller(String userName, String password, String phoneNumber, String address,
      String city, String state, String zip) {
    super(userName, password, phoneNumber, address, city, state, zip);
    this.setType("driver");
  }
}
