package by.bntu.fitr.povt.whitebearteam.controller;

import by.bntu.fitr.povt.whitebearteam.entity.Product;
import by.bntu.fitr.povt.whitebearteam.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    public ProductService productService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Product> getAllProducts(){
        return productService.findAll();
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void saveProduct(@RequestBody Product product){
        productService.save(product);
    }

    @RequestMapping(value = "/{articul}", method = RequestMethod.GET)
    public Product getProductByArticul(@PathVariable("articul") String articul){
        return productService.getByArticul(articul);
    }

    @RequestMapping(value = "/delete/{articul}", method = RequestMethod.POST)
    public void deleteProduct(@PathVariable("articul") String articul){
        productService.delete(articul);
    }

    @RequestMapping(value = "/update/{articul}", method = RequestMethod.POST)
    public void updateProduct(@RequestBody Product product){
        productService.update(product);
    }

    @RequestMapping(value = "/count", method = RequestMethod.GET)
    public Integer getCount(){
        return productService.getCount();
    }

    @RequestMapping(value = "/range", method = RequestMethod.GET)
    public List<Product> getInRange(HttpServletRequest request, HttpServletResponse response){
        String from = request.getParameter("from");
        String count = request.getParameter("count");
        return productService.getInRange(from, count);
    }
}
