package com.greenplatform.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

/**
 * Created by Luowenlv on 2019/5/15,14:44
 * 基础控制
 */
@Controller
@RequestMapping(value = "/base")
public class BaseController {

    @GetMapping(value = "/index")
    public String index() {
        return "plate/yhgl/index";
    }

    @GetMapping(value = "/register")
    public String register() {
        return "login/register";
    }

    @GetMapping(value = "/login")
    public String login() {
        return "login/login";
    }

    @GetMapping(value = "/loginout")
    public String loginout(HttpSession session){
        // 移除session
        session.removeAttribute("loginUser");
        return "login/login";
    }

    @GetMapping(value = "/history")
    public String history(String type){
        return "system/history";
    }

    @GetMapping(value = "/certification")
    public String certification(String type){
        return "system/certification";
    }

    @GetMapping(value = "/rwgl")
    public String rwgl(){
        return "plate/rwgl/index";
    }

    @GetMapping(value = "/nlgl")
    public String nlgl(){
        return "plate/nlgl/index";
    }

    @GetMapping(value = "/spgl")
    public String spgl(){
        return "plate/spgl/index";
    }

    @GetMapping(value = "/stgl")
    public String stgl(){
        return "plate/stgl/main";
    }

    @GetMapping(value = "/zhsjgl")
    public String zhsjgl(){
        return "plate/zhsjgl/main";
    }

    @GetMapping(value = "/jcdm")
    public String jcdm(){
        return "plate/jcdm/index";
    }

    @GetMapping(value = "/header")
    public String header(){
        return "plate/iFrame/header";
    }

    @GetMapping(value = "/footer")
    public String footer(){
        return "plate/iFrame/footer";
    }

    @GetMapping(value = "/menu")
    public String menu(){
        return "plate/iFrame/menu";
    }

    @GetMapping(value = "/addUserModel")
    public String addUserModel(){
        return "plate/yhgl/addUserModel";
    }

    @GetMapping(value = "/addSpmxModel")
    public String addSpmxModel(){
        return "plate/spgl/addSpmxModel";
    }

    @GetMapping(value = "/addJcdmModel")
    public String addJcdmModel(){
        return "plate/jcdm/addJcdmModel";
    }
}
