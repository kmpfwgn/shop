package by.bntu.fitr.povt.whitebearteam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/")
public class MainController {

    @GetMapping(value = {"/", "/index"})
    public String index(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "index";
    }

    @GetMapping(value = "categories")
    public String categories(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "categories";
    }

    @GetMapping(value = "contacts")
    public String contacts(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "contacts";
    }

    @GetMapping(value = "delivery")
    public String delivery(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "delivery";
    }

    @GetMapping(value = "findpages")
    public String findpages(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "findpages";
    }

    @GetMapping(value = "product")
    public String product(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "product";
    }

    @GetMapping(value = "registration")
    public String registration(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "registration";
    }

    @GetMapping(value = "cart")
    public String cart(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "cart";
    }

    @GetMapping(value = "test")
    public String test(HttpServletRequest request, HttpServletResponse response){
        response.setContentType("text/html;charset=UTF-8");
        return "test";
    }
}
