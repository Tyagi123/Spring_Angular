package com.main.model;

public class AppStatus {

    private String env, status;

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public AppStatus(String env, String status) {
        this.env = env;
        this.status = status;
    }
}


