import com.github.TestController
import org.springframework.http.MediaType
import spock.lang.Specification
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import static org.hamcrest.CoreMatchers.equalTo

class TestControllerSpec extends Specification {
    private TestController testController
    private MockMvc mockMvc

    void setup() {
        testController = new TestController()
        mockMvc = MockMvcBuilders.standaloneSetup(testController).build()
    }

    def "Get test data"() {
        when:
        def response = mockMvc.perform(get("/test"))

        then:
        response.andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath('$.text').value(equalTo('Spring-Boot-Create-React-App Template!')))
    }
}