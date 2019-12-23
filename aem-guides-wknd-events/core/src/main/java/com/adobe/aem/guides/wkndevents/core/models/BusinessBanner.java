package com.adobe.aem.guides.wkndevents.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ExporterConstants;

@Model(
        adaptables = SlingHttpServletRequest.class, 
        adapters = {ComponentExporter.class}, 
        resourceType = BusinessBanner.RESOURCE_TYPE
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class BusinessBanner implements ComponentExporter {

    static final String RESOURCE_TYPE = "wknd-events/components/content/businessbanner";

    // private static final String PREPEND_MSG = "Hello";
    
    @ValueMapValue @Optional
    private String message;
    
    public String getDisplayMessage() {
        if(message != null && message.length() > 0) {
            // return PREPEND_MSG + " "  + message;
            return message;
        }
        return null;
    }

    @ValueMapValue @Optional
    private String text;

    public String getText() {
        if(text != null && text.length() > 0) {
            // return PREPEND_MSG + " "  + message;
            return text;
        }
        return null;
    }
    
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

}