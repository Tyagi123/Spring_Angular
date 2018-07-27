package com.main.controller;

import com.main.model.Message;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {


    @GetMapping("/home")
    @ResponseBody
    public Message welcomeUser() {
        Message obj = new Message();
        obj.setMessage("ABC");
        return obj;
    }
}
