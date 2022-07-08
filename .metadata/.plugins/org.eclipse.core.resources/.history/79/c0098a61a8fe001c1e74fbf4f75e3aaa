package project.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Seller;
import project.repository.SellerRepository;

@Service
public class DriverServiceImpl implements UserService<Seller> {

  @Autowired
  SellerRepository sellerRepository;
  PasswordService passwordService = new PasswordService();

  @Override
  public Seller addUser(String userName, String password, String phoneNumber, String address,
      String city, String state, String zip) {
    if (this.getUserIdByName(userName) == null) {
      String newPassword = passwordService.generatePassword(password);
      Seller seller = new Seller(userName, newPassword, phoneNumber, address, city, state, zip);
      sellerRepository.insert(seller);
      System.out.println("Driver added to the database");
      return seller;
    }
    System.out.println("Driver can't be added to the database");
    return null;
  }

  @Override
  public int deleteUser(String id) {
    if (this.getUser(id).isPresent()) {
      sellerRepository.deleteById(id);
      System.out.println("Driver deleted from the database");
      return 1;
    }
    System.out.println("Driver can't be deleted from the database");
    return -1;
  }

  @Override
  public Optional<Seller> getUser(String id) {
    if (id != null) {
      return sellerRepository.findById(id);
    }
    return Optional.empty();
  }

  @Override
  public String getUserIdByName(String userName) {
    List<Seller> sellers = this.getUsers();
    for (Seller seller : sellers) {
      if (seller.getUserName().equals(userName)) {
        return seller.getId();
      }
    }
    System.out.println("Given userName doesn't found in driver database");
    return null;
  }

  @Override
  public Optional<Seller> getUserByName(String userName) {
    return this.getUser(getUserIdByName(userName));
  }

  @Override
  public List<Seller> getUsers() {
    return sellerRepository.findAll();
  }

  @Override
  public boolean passwordMatch(String id, String password) {
    Optional<Seller> seller = this.getUser(id);
    return seller.isPresent() && passwordService.passwordMatch(password, seller.get().getPassword());
  }

  @Override
  public int updatePassword(String id, String oldPassword, String newPassword) {
    Optional<Seller> seller = this.getUser(id);
    if (seller.isPresent()) {
      if (this.passwordMatch(id, oldPassword)) {
        seller.get().setPassword(passwordService.generatePassword(newPassword));
        sellerRepository.save(seller.get());
        System.out.println("Update the password");
        return 1;
      } else {
        System.out.println("Password doesn't match");
        return 0;
      }
    }
    System.out.println("Can't update the password");
    return -1;
  }

  @Override
  public int updatePhoneNumber(String id, String newNumber) {
    Optional<Seller> seller = this.getUser(id);
    if (seller.isPresent()) {
      seller.get().setPhoneNumber(newNumber);
      sellerRepository.save(seller.get());
      System.out.println("Update the phone number");
      return 1;
    }
    System.out.println("Can't update the phone number");
    return -1;
  }

  @Override
  public int updateAddress(String id, String address, String city, String state,
      String zip) {
    Optional<Seller> seller = this.getUser(id);
    if (seller.isPresent()) {
      seller.get().setAddress(address);
      seller.get().setCity(city);
      seller.get().setState(state);
      seller.get().setZip(zip);
      sellerRepository.save(seller.get());
      System.out.println("Update the address");
      return 1;
    }
    System.out.println("Can't update the address");
    return -1;
  }
}
