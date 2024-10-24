package com.abidi.stages;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.abidi.stages.entities.Stage;
import com.abidi.stages.entities.Type;
import com.abidi.stages.repos.StageRepository;

@SpringBootTest
class StagesApplicationTests {


	@Autowired
	StageRepository stageRepository;

	

	@Test
	public void testFindByNomStage() {
		List<Stage> stages = stageRepository.findByTitre("stage d'initiation");
	}

	@Test
	public void testFindByTitreEntreprise() {
		List<Stage> stages = stageRepository.findByTitreAndEntreprise("stage d'initiation", "telecom");
	}

	@Test
	public void testFindByType() {
		Type type = new Type();
		type.setId(1L);

		List<Stage> stages = stageRepository.findByType(type);
		assert stages != null : "Stages should not be null";

	}

	@Test
	public void testFindByTypeId() {
		Long typeId = 1L;
		List<Stage> stages = stageRepository.findByTypeId(typeId);
		assert stages != null : "Stages should not be null";

	}


	@Test
	public void testTrierStagesTitreEntreprise() {
		List<Stage> stages = stageRepository.trierStagesParTitreEtEntreprise();
		assert stages != null : "Stages should not be null";

	}

}
