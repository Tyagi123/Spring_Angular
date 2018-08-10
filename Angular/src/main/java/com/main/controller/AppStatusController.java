package com.main.controller;

import com.main.model.AppStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AppStatusController {

    @GetMapping("/appstatus")
    @ResponseBody
    public List<AppStatus> list(String personId, String env) {
        List<AppStatus> list = new ArrayList<>(1);
        list.add(new AppStatus("Q7", "Green"));
        list.add(new AppStatus("Q1", "Red"));
        return list;
    }
}