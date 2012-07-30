// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package pittheo.projects.template.domain;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;
import pittheo.projects.template.domain.ImageInfoDataOnDemand;

privileged aspect ImageInfoIntegrationTest_Roo_IntegrationTest {
    
    declare @type: ImageInfoIntegrationTest: @RunWith(SpringJUnit4ClassRunner.class);
    
    declare @type: ImageInfoIntegrationTest: @ContextConfiguration(locations = "classpath:/META-INF/spring/applicationContext.xml");
    
    declare @type: ImageInfoIntegrationTest: @Transactional;
    
    @Autowired
    private ImageInfoDataOnDemand ImageInfoIntegrationTest.dod;
    
    @Test
    public void ImageInfoIntegrationTest.testCountImageInfoes() {
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", dod.getRandomImageInfo());
        long count = pittheo.projects.template.domain.ImageInfo.countImageInfoes();
        org.junit.Assert.assertTrue("Counter for 'ImageInfo' incorrectly reported there were no entries", count > 0);
    }
    
    @Test
    public void ImageInfoIntegrationTest.testFindImageInfo() {
        pittheo.projects.template.domain.ImageInfo obj = dod.getRandomImageInfo();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to provide an identifier", id);
        obj = pittheo.projects.template.domain.ImageInfo.findImageInfo(id);
        org.junit.Assert.assertNotNull("Find method for 'ImageInfo' illegally returned null for id '" + id + "'", obj);
        org.junit.Assert.assertEquals("Find method for 'ImageInfo' returned the incorrect identifier", id, obj.getId());
    }
    
    @Test
    public void ImageInfoIntegrationTest.testFindAllImageInfoes() {
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", dod.getRandomImageInfo());
        long count = pittheo.projects.template.domain.ImageInfo.countImageInfoes();
        org.junit.Assert.assertTrue("Too expensive to perform a find all test for 'ImageInfo', as there are " + count + " entries; set the findAllMaximum to exceed this value or set findAll=false on the integration test annotation to disable the test", count < 250);
        java.util.List<pittheo.projects.template.domain.ImageInfo> result = pittheo.projects.template.domain.ImageInfo.findAllImageInfoes();
        org.junit.Assert.assertNotNull("Find all method for 'ImageInfo' illegally returned null", result);
        org.junit.Assert.assertTrue("Find all method for 'ImageInfo' failed to return any data", result.size() > 0);
    }
    
    @Test
    public void ImageInfoIntegrationTest.testFindImageInfoEntries() {
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", dod.getRandomImageInfo());
        long count = pittheo.projects.template.domain.ImageInfo.countImageInfoes();
        if (count > 20) count = 20;
        java.util.List<pittheo.projects.template.domain.ImageInfo> result = pittheo.projects.template.domain.ImageInfo.findImageInfoEntries(0, (int) count);
        org.junit.Assert.assertNotNull("Find entries method for 'ImageInfo' illegally returned null", result);
        org.junit.Assert.assertEquals("Find entries method for 'ImageInfo' returned an incorrect number of entries", count, result.size());
    }
    
    @Test
    public void ImageInfoIntegrationTest.testFlush() {
        pittheo.projects.template.domain.ImageInfo obj = dod.getRandomImageInfo();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to provide an identifier", id);
        obj = pittheo.projects.template.domain.ImageInfo.findImageInfo(id);
        org.junit.Assert.assertNotNull("Find method for 'ImageInfo' illegally returned null for id '" + id + "'", obj);
        boolean modified =  dod.modifyImageInfo(obj);
        java.lang.Integer currentVersion = obj.getVersion();
        obj.flush();
        org.junit.Assert.assertTrue("Version for 'ImageInfo' failed to increment on flush directive", (currentVersion != null && obj.getVersion() > currentVersion) || !modified);
    }
    
    @Test
    public void ImageInfoIntegrationTest.testMerge() {
        pittheo.projects.template.domain.ImageInfo obj = dod.getRandomImageInfo();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to provide an identifier", id);
        obj = pittheo.projects.template.domain.ImageInfo.findImageInfo(id);
        boolean modified =  dod.modifyImageInfo(obj);
        java.lang.Integer currentVersion = obj.getVersion();
        pittheo.projects.template.domain.ImageInfo merged =  obj.merge();
        obj.flush();
        org.junit.Assert.assertEquals("Identifier of merged object not the same as identifier of original object", merged.getId(), id);
        org.junit.Assert.assertTrue("Version for 'ImageInfo' failed to increment on merge and flush directive", (currentVersion != null && obj.getVersion() > currentVersion) || !modified);
    }
    
    @Test
    public void ImageInfoIntegrationTest.testPersist() {
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", dod.getRandomImageInfo());
        pittheo.projects.template.domain.ImageInfo obj = dod.getNewTransientImageInfo(Integer.MAX_VALUE);
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to provide a new transient entity", obj);
        org.junit.Assert.assertNull("Expected 'ImageInfo' identifier to be null", obj.getId());
        obj.persist();
        obj.flush();
        org.junit.Assert.assertNotNull("Expected 'ImageInfo' identifier to no longer be null", obj.getId());
    }
    
    @Test
    public void ImageInfoIntegrationTest.testRemove() {
        pittheo.projects.template.domain.ImageInfo obj = dod.getRandomImageInfo();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to initialize correctly", obj);
        java.lang.Long id = obj.getId();
        org.junit.Assert.assertNotNull("Data on demand for 'ImageInfo' failed to provide an identifier", id);
        obj = pittheo.projects.template.domain.ImageInfo.findImageInfo(id);
        obj.remove();
        obj.flush();
        org.junit.Assert.assertNull("Failed to remove 'ImageInfo' with identifier '" + id + "'", pittheo.projects.template.domain.ImageInfo.findImageInfo(id));
    }
    
}