package project;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import project.model.Comment;
import project.model.Customer;
import project.model.Dish;
import project.model.Seller;
import project.model.Order;
import project.model.Restaurant;
import project.model.RestaurantInfo;
import project.model.SearchEngine;
import project.repository.CustomerRepository;
import project.repository.SellerRepository;
import project.repository.OrderRepository;
import project.repository.RestaurantRepository;
import project.repository.SearchEngineRepository;
import project.service.PasswordService;

 
@SpringBootApplication
public class LoadDatabase implements CommandLineRunner {
  @Autowired
  private CustomerRepository customerRepository;
  @Autowired
  private SellerRepository sellerRepository;
  @Autowired
  private RestaurantRepository restaurantRepository;
  @Autowired
  private OrderRepository orderRepository;
  @Autowired
  private SearchEngineRepository searchEngineRepository;
  PasswordService passwordService = new PasswordService();

  public static void main(String[] args) {
    SpringApplication.run(LoadDatabase.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    customerRepository.deleteAll();
    Customer customer1 = new Customer("Jelena", passwordService.generatePassword("12345"),
        "065429124", "Majke Jugovica 21", "Banja Luka", "", "78000");
    customerRepository.save(customer1);

    sellerRepository.deleteAll();
    Seller driver1 = new Seller("Bruce", passwordService.generatePassword("12345"), "5674243435",
        "401 NE Northgate Way", "Seattle", "WA", "98125");
    sellerRepository.save(driver1);
    
    Seller driver2 = new Seller("Bruc", passwordService.generatePassword("12345"), "5674243435",
            "401 NE Northgate Way", "Seattle", "WA", "98125");
        sellerRepository.save(driver2);

    RestaurantInfo restaurantInfo1 = new RestaurantInfo();
    restaurantInfo1.setOpen(true);
    restaurantInfo1.setRestaurantName("Macdonald");
    restaurantInfo1.setDescription("We serve best fast food!");
    restaurantInfo1.setImageUrl(
        "https://www.streebo.com/wp-content/themes/streebo/images/chatbot-for-resturant/chatbot-for-resturant-img1.jpg");


    Dish dish1 = new Dish();
    dish1.setDishName("Margherita");
    dish1.setImageUrl(
        "https://www.10dakot.co.il/wp-content/uploads/2013/06/%D7%A4%D7%99%D7%A6%D7%94.jpg");
    dish1.setPrice(5);
    dish1.setDescription("Sauce, Cheese, Olives");

    Dish dish2 = new Dish();
    dish2.setDishName("Capricciosa");
    dish2.setImageUrl("https://misleny.pizzagyar.hu/files/uploads/main_slider_img-1_normal.png");
    dish2.setPrice(8);
    dish2.setDescription("Cheese, Ham, Tomato, Mushrooms");

    Dish dish3 = new Dish();
    dish3.setDishName("Vegetariana");
    dish3.setImageUrl("https://st.depositphotos.com/1020618/2013/i/600/depositphotos_20136185-stock-photo-delicious-italian-pizza.jpg");
    dish3.setPrice(10);
    dish3.setDescription("Sauce, Olives, Tomato, Basil, Mushrooms");

    Dish dish4 = new Dish();
    dish4.setDishName("Fast Pizza");
    dish4.setImageUrl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrui71NhBx1xcz811LDiUlGZRwgOOxcYPrXn4sQCoRUP3mgapn3beI0xD2E5aLnl0zFiM&usqp=CAU");
    dish4.setPrice(22);
    dish4.setDescription("Sauce, Fast Cheese, Basil");

    Dish dish5 = new Dish();
    dish5.setDishName("Salad");
    dish5.setImageUrl(
        "https:www.howsweeteats.com/wp-content/uploads/2020/05/summer-salad-16-500x375.jpg");
    dish5.setPrice(13);

    Dish dish6 = new Dish();
    dish6.setDishName("Soup");
    dish6.setImageUrl(
        "https:www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg");
    dish6.setPrice(7.5);

    Dish dish7 = new Dish();
    dish7.setDishName("Orange Juice");
    dish7.setImageUrl("https:thumbs.dreamstime.com/b/fresh-orange-juice-vitamins-health-table-fruits-jucie-78350628.jpg");
    dish7.setPrice(5);
    

    List<Dish> dishes1 = new ArrayList<>();
    dishes1.add(dish1);
    dishes1.add(dish2);
    dishes1.add(dish3);
    dishes1.add(dish4);

    List<Dish> dishes2 = new ArrayList<>();
    dishes2.add(dish4);
    dishes2.add(dish5);
    dishes2.add(dish6);

    List<Dish> dishes3 = new ArrayList<>();
    dishes3.add(dish7);

    restaurantRepository.deleteAll();
    Restaurant restaurant1 = new Restaurant("mcd", passwordService.generatePassword("12345"),
        "1234567890", "9000 Holman Rd NW", "Seattle", "WA", "98117", restaurantInfo1, dishes1);
    
    restaurantRepository.save(restaurant1);

    searchEngineRepository.deleteAll();
    SearchEngine searchEngine = new SearchEngine();
    String id1 = restaurant1.getId();
    searchEngine.add(restaurantInfo1.getRestaurantName(), id1);
    searchEngine.add(dish4.getDishName(), id1);
    searchEngine.add(dish2.getDishName(), id1);
    searchEngine.add(dish3.getDishName(), id1);
 
    searchEngineRepository.save(searchEngine);

    orderRepository.deleteAll();
    Order order1 = new Order();
    order1.setCustomerId(customer1.getId());
    order1.setDriverId(driver1.getId());
    order1.setRestaurantId(restaurant1.getId());
    order1.setStartTime(LocalDateTime.of(2020, 1, 1, 19, 30).toString());
    order1.setDelivery(true);
    order1.setEndTime(LocalDateTime.of(2020, 1, 1, 20, 0).toString());
    order1.setContent(dishes1);
    double price1 = 0;
    for (Dish dish : dishes1) {
      price1 += dish.getPrice();
    }
    order1.setPrice(price1);
    Comment comment1 = new Comment(4, "very nice experience, the food is delicious");
    order1.setComment(comment1);
    Order order2 = new Order();
    order2.setCustomerId(customer1.getId());
    order2.setDriverId(driver1.getId());
    order2.setRestaurantId(restaurant1.getId());
    order2.setStartTime(LocalDateTime.of(2020, 2, 3, 11, 25).toString());
    order2.setDelivery(true);
    order2.setEndTime(LocalDateTime.of(2020, 2, 3, 13, 0).toString());
    order2.setContent(dishes2);
    double price2 = 0;
    for (Dish dish : dishes2) {
      price2 += dish.getPrice();
    }
    order2.setPrice(price2);
    Comment comment2 = new Comment(2, "the food is so expensive");
    order2.setComment(comment2);
    
    orderRepository.save(order1);
    orderRepository.save(order2);
  

  }
}
