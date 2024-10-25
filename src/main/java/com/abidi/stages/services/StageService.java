package com.abidi.stages.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.abidi.stages.entities.Stage;
import com.abidi.stages.entities.Type;

@Service
public interface StageService {



    Stage saveStage(Stage stage);
    Stage updateStage(Stage stage);
    void deleteStage(Stage stage);
    void deleteStageById(Long id);

    List<Stage> findByTitreEntreprise(String titre, String entreprise);
    Stage getStage(Long id);

    List<Stage> findByTitreStage(String titre);
    List<Stage> getAllStages();
    List<Stage> findByTitre(String titre);
    List<Stage> findByEntreprise(String entreprise);
    List<Stage> findByType(Type type);
    List<Stage> findByTypeId(Long id);
    List<Stage> trierStagesTitreEntreprise();

}
