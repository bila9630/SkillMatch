import AuthRoute from '../components/AuthRoute'
import { StatsGrid } from '../components/StatsGrid'
import { Grid, Container } from '@mantine/core'
import { StatsRingCard } from '../components/StatsRingCard'
import { BadgeCard } from '../components/BadgeCard'

export default function Home() {
  return (
    <>
      <AuthRoute>
        <div>
          <StatsGrid data={[
            { "title": "Revenue", "icon": "receipt", "value": "13,456", "diff": 34 },
            { "title": "Available employees", "icon": "coin", "value": "4,145", "diff": -2 },
            { "title": "Number of projects", "icon": "discount", "value": "745", "diff": 18 },
            { "title": "New customers", "icon": "user", "value": "188", "diff": 10 }
          ]} />
          {/* <Container style={{width: "92vw"}} px="xs"> */}
          <Container size={1580} px="xs">
            <Grid>
              {/* left side */}
              <Grid.Col sm={12} md={6}>
                <Grid>
                  <Grid.Col sm={12} md={6}>
                    <BadgeCard
                      image="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80"
                      title="New office in New York"
                      country="New York"
                      description="We are expanding to New York! Check out our new office!!"
                      badges={[
                        {
                          "emoji": "☀️",
                          "label": "Sunny weather"
                        },
                        {
                          "emoji": "🦓",
                          "label": "Onsite zoo"
                        },
                        {
                          "emoji": "🌊",
                          "label": "Sea"
                        },
                      ]}
                    />
                  </Grid.Col>
                  <Grid.Col sm={12} md={6}>
                    <BadgeCard
                      image="https://images.unsplash.com/photo-1578991132108-16c5296b63dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      title="Success story in Singapore"
                      country="Singapore"
                      description="Successfully migrated BMW to the cloud with Openshift and RubyCloud! Check out the case study!"
                      badges={[
                        {
                          "emoji": "💰",
                          "label": "Finance"
                        },
                        {
                          "emoji": "👩‍💼",
                          "label": "Business"
                        },
                        {
                          "emoji": "🚗",
                          "label": "Automotive"
                        }
                      ]}
                    />
                  </Grid.Col>
                </Grid>

              </Grid.Col>
              {/* right side */}
              <Grid.Col sm={12} md={6}>
                <Grid>
                  {/* upper */}
                  <Grid.Col sm={12}>
                    <Grid>
                      <Grid.Col sm={6}>
                        <StatsRingCard
                          title="Project Finance"
                          completed={1887}
                          total={2334}
                          stats={[
                            { "value": 447, "label": "Remaining" },
                            { "value": 76, "label": "In progress" },
                          ]}
                        />
                      </Grid.Col>
                      <Grid.Col sm={6}>
                        <StatsRingCard
                          title="Project Banking"
                          completed={200}
                          total={1200}
                          stats={[
                            { "value": 600, "label": "Remaining" },
                            { "value": 400, "label": "In progress" },
                          ]}
                        />
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  {/* lower */}
                  <Grid.Col sm={12}>
                    <Grid>
                      <Grid.Col sm={6}>
                        <StatsRingCard
                          title="Project E-System"
                          completed={600}
                          total={1200}
                          stats={[
                            { "value": 500, "label": "Remaining" },
                            { "value": 100, "label": "In progress" },
                          ]}
                        />
                      </Grid.Col>
                      <Grid.Col sm={6}>
                        <StatsRingCard
                          title="Project Fachingen"
                          completed={600}
                          total={1000}
                          stats={[
                            { "value": 200, "label": "Remaining" },
                            { "value": 200, "label": "In progress" },
                          ]}
                        />
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
      </AuthRoute>
    </>
  )
}
