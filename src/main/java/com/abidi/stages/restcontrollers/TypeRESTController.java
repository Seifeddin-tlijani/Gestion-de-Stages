package com.abidi.stages.restcontrollers;


import com.abidi.stages.entities.Type;
import com.abidi.stages.repos.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/type")
@CrossOrigin("*")
public class TypeRESTController {

    @Autowired
    TypeRepository typeRepository;
    @RequestMapping(method= RequestMethod.GET)
    public List<Type> getAllTypes()
    {
        return typeRepository.findAll();
    }

    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Type getTypeById(@PathVariable("id") Long id) {
        return typeRepository.findById(id).get();
    }

}
