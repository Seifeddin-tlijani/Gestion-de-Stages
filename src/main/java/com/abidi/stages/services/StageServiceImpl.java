package com.abidi.stages.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abidi.stages.entities.Stage;
import com.abidi.stages.entities.Type;
import com.abidi.stages.repos.StageRepository;

@Service
public class StageServiceImpl implements StageService {


    @Autowired
    private StageRepository stageRepository;

    @Override
    public Stage saveStage(Stage stage) {
        return stageRepository.save(stage);
    }

    @Override
    public Stage updateStage(Stage stage) {
        return stageRepository.save(stage);
    }

    @Override
    public void deleteStage(Stage stage) {
        stageRepository.delete(stage);
    }

    @Override
    public void deleteStageById(Long id) {
        stageRepository.deleteById(id);
    }

    @Override
    public Stage getStage(Long id) {
        return stageRepository.findById(id).orElse(null);
    }

    @Override
    public List<Stage> findByTitreStage(String titreStage) {
        return stageRepository.findByTitre(titreStage);
    }

    @Override
    public List<Stage> getAllStages() {
        return stageRepository.findAll();
    }

    @Override
    public List<Stage> findByTitre(String titreStage) {
        return stageRepository.findByTitre(titreStage);
    }

    @Override
    public List<Stage> findByEntreprise(String entreprise) {
        return stageRepository.findByEntreprise(entreprise);
    }

    @Override
    public List<Stage> findByType(Type type) {
        return stageRepository.findByType(type);
    }

    @Override
    public List<Stage> findByTypeId(Long id) {
        return stageRepository.findByTypeId(id);
    }

    @Override
    public List<Stage> trierStagesTitreEntreprise() {
        return stageRepository.trierStagesParTitreEtEntreprise();
    }

    @Override
    public List<Stage> findByTitreEntreprise(String titre, String entreprise) {
        return stageRepository.findByTitreAndEntreprise(titre, entreprise);
    }

}
