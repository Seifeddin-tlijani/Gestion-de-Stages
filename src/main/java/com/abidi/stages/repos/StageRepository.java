package com.abidi.stages.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.abidi.stages.entities.Stage;
import com.abidi.stages.entities.Type;

public interface StageRepository extends JpaRepository<Stage, Long> {
	List<Stage> findByTitre(String titre);

	@Query("select s from Stage s where s.titre like %:titre% and s.entreprise like %:entreprise%")
	List<Stage> findByTitreAndEntreprise(@Param("titre") String titre, @Param("entreprise") String entreprise);

	List<Stage> findByEntreprise(String entreprise);

	@Query("select s from Stage s where s.type = :type")
	List<Stage> findByType(@Param("type") Type type);

	List<Stage> findByTypeId(Long id);

	@Query("select s from Stage s order by s.titre ASC")
	List<Stage> findByOrderByTitreAsc();

	@Query("select s from Stage s order by s.titre ASC, s.entreprise ASC")
	List<Stage> trierStagesParTitreEtEntreprise();
}
