package org.kepler.phonogram.controller;

import org.kepler.phonogram.model.Department;
import org.kepler.phonogram.model.Person;
import org.kepler.phonogram.model.Phonogram;
import org.kepler.phonogram.repo.DepartmentRepository;
import org.kepler.phonogram.repo.PersonRepository;
import org.kepler.phonogram.repo.PhonogramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;


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
        List<Person> persons = (List<Person>) personRepository.findAll();
        model.addAttribute("persons", persons);
        List<Department> departments = (List<Department>) departmentRepository.findAll();
        model.addAttribute("departments", departments);
        return "index";
    }

    private Person getPerson(String person) {
        Optional<Person> tempPerson = personRepository.findById(Integer.valueOf(person));
        Person newPerson = null;
        if(tempPerson.isPresent()) {
            newPerson = tempPerson.get();
        }
        return newPerson;
    }

    @PostMapping("/")
    public String addMessage(@RequestParam String item,
                             @RequestParam String registrationDate,
                             @RequestParam String message,
                             @RequestParam String writer,
                             @RequestParam String sender,
                             @RequestParam String receiver,
                             Model model) {

        Phonogram phonogram = Phonogram.builder()
                .direction("1")
                .item(item)
                .registrationDate(registrationDate)
                .message(message)
                .writer(getPerson(writer))
                .sender(getPerson(sender))
                .receiver(getPerson(receiver))
                .build();
        phonogramRepository.save(phonogram);

        return "redirect:/";
    }
}
