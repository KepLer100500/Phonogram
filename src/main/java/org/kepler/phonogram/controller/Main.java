package org.kepler.phonogram.controller;

import org.kepler.phonogram.model.Department;
import org.kepler.phonogram.model.Phonogram;
import org.kepler.phonogram.repo.DepartmentRepository;
import org.kepler.phonogram.repo.PersonRepository;
import org.kepler.phonogram.repo.PhonogramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
public class Main {
    @Autowired
    DepartmentRepository departmentRepository;

    @Autowired
    PersonRepository personRepository;

    @Autowired
    PhonogramRepository phonogramRepository;

    @GetMapping("/")
    public String index(Model model) {
        List<Phonogram> phonograms = (List<Phonogram>) phonogramRepository.findAll();
        model.addAttribute("phonograms", phonograms);
        return "index";
    }
}
