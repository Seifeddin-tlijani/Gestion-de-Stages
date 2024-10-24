package com.abidi.stages.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.abidi.stages.entities.Stage;
import com.abidi.stages.services.StageService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class StageRESTController {
	
	@Autowired
	StageService stageService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Stage> getAllStages() {
	return stageService.getAllStages();
	}


	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Stage getStageById(@PathVariable("id") Long id) {
		return stageService.getStage(id);

	}
	@RequestMapping(method = RequestMethod.POST)
	public Stage createStage(@RequestBody Stage stage) {
		return stageService.saveStage(stage);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Stage updateStage(@RequestBody Stage stage) {
		return stageService.updateStage(stage);
	}

	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteStage(@PathVariable("id") Long id)
	{
		stageService.deleteStageById(id);
	}
	@RequestMapping(value="/stagetype/{id}",method = RequestMethod.GET)
	public List<Stage> getStagesByTypeId(@PathVariable("id") Long id) {
		return stageService.findByTypeId(id);
	}


}
