package io.smsc.model.projections;

import io.smsc.model.User;
import io.smsc.model.dashboard.Dashboard;
import io.smsc.model.dashboard.DashboardBox;
import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

/**
 * This interface is describing excerpting projection for {@link DashboardBox}
 * entity and is used for fetching relation properties in JSON response.
 *
 * @author  Nazar Lipkovskyy
 * @see     Projection
 * @since   0.0.1-SNAPSHOT
 */
@Projection(name = "dashboard", types = { Dashboard.class })
public interface DashboardProjection {

    Long getId();

    String getName();

    String getIcon();

    User getUser();

    Set<DashboardBox> getDashboardBoxes();
}
