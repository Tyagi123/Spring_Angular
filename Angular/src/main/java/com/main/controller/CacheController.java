package com.main.controller;

import com.main.model.Cache;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CacheController {

    @PostMapping("/cache")
    @ResponseBody
    public List<Cache> list(String personId, String env) {
        List<Cache> list = new ArrayList<>(1);
        list.add(new Cache("personId", "env", "cacheId"));
        return list;
    }
}

