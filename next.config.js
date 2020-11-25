const redirects = [
  { source: "/new-student-special", destination: "/new-to-yoga" },
  { source: "/new-student-special/", destination: "/new-to-yoga" },
  { source: "/terms_and_policies", destination: "/terms-and-conditions" },
  { source: "/terms_and_policies/", destination: "/terms-and-conditions" },
  { source: "/our-studio", destination: "/studio" },
  { source: "/our-studio/", destination: "/studio" },
  { source: "/private-sessions-warrior-one", destination: "/private-sessions" },
  {
    source: "/private-sessions-warrior-one/",
    destination: "/private-sessions",
  },
  { source: "/about-our-classes", destination: "/class-descriptions" },
  { source: "/about-our-classes/", destination: "/class-descriptions" },
  { source: "/challenges-and-events", destination: "/events" },
  { source: "/challenges-and-events/", destination: "/events" },
  { source: "/home-teacher-trainings", destination: "/teacher-training" },
  { source: "/home-teacher-trainings/", destination: "/teacher-training" },
  { source: "/packages", destination: "/pricing" },
  { source: "/packages/", destination: "/pricing" },
  { source: "/aboutus", destination: "/about" },
  { source: "/aboutus/", destination: "/about" },
  { source: "/community", destination: "/tr1be" },
  { source: "/community/", destination: "/tr1be" },
  { source: "/category/team-members", destination: "/tr1be" },
  { source: "/category/team-members/", destination: "/tr1be" },
  { source: "/category/outreach", destination: "/blog" },
  { source: "/category/outreach/", destination: "/blog" },
  {
    source: "/category/yoga-teacher-trainings",
    destination: "/teacher-training",
  },
  {
    source: "/category/yoga-teacher-trainings/",
    destination: "/teacher-training",
  },
  {
    source: "/event/free-outreach-yin-yoga-class-4",
    destination: "/events/free-community-yoga-yin-nov-27",
  },
  {
    source: "/event/free-outreach-yin-yoga-class-4/",
    destination: "/events/free-community-yoga-yin-nov-27",
  },
  {
    source: "/event/free-outreach-yin-yoga-class-3",
    destination: "/events/free-community-yoga-yin-nov-20",
  },
  {
    source: "/event/free-outreach-yin-yoga-class-3/",
    destination: "/events/free-community-yoga-yin-nov-20",
  },
  {
    source: "/event/free-outreach-yin-yoga-class-2",
    destination: "/events/free-community-yoga-yin-nov-13",
  },
  {
    source: "/event/free-outreach-yin-yoga-class-2/",
    destination: "/events/free-community-yoga-yin-nov-13",
  },
  {
    source: "/event/free-outreach-yin-yoga-class",
    destination: "/events/free-community-yoga-yin-nov-6",
  },
  {
    source: "/event/free-outreach-yin-yoga-class/",
    destination: "/events/free-community-yoga-yin-nov-6",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class-4",
    destination: "/events/free-community-yoga-flow-nov-27",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class-4/",
    destination: "/events/free-community-yoga-flow-nov-27",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class-3",
    destination: "/events/free-community-yoga-flow-nov-20",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class-3/",
    destination: "/events/free-community-yoga-flow-nov-20",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class-2",
    destination: "/events/free-community-yoga-flow-nov-13",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class-2/",
    destination: "/events/free-community-yoga-flow-nov-13",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class",
    destination: "/events/free-community-yoga-flow-nov-6",
  },
  {
    source: "/event/free-all-levels-community-yoga-flow-class/",
    destination: "/events/free-community-yoga-flow-nov-6",
  },
  {
    source: "/event/community-class-free-to-all-every-saturday-evening/",
    destination: "/events",
  },
  {
    source: "/event/community-class-free-to-all-every-saturday-evening",
    destination: "/events",
  },
  {
    source: "/event/108-sun-salutations-winter-solstice",
    destination: "/events/108-sun-salutations-winter-solstice-2020",
  },
  {
    source: "/event/108-sun-salutations-winter-solstice/",
    destination: "/events/108-sun-salutations-winter-solstice-2020",
  },
  {
    source: "/event/meditation-bootcamp",
    destination: "/events",
  },
  {
    source: "/event/meditation-bootcamp/",
    destination: "/events",
  },
  {
    source: "/event/plank-challenge",
    destination: "/events",
  },
  {
    source: "/event/plank-challenge/",
    destination: "/events",
  },
  {
    source: "/event/yoga-teacher-training-winter-garden-windermere",
    destination: "/teacher-trainings",
  },
  {
    source: "/event/yoga-teacher-training-winter-garden-windermere/",
    destination: "/teacher-trainings",
  },
  {
    source: "/event/yoga-teacher-training-dunedin",
    destination: "/teacher-trainings",
  },
  {
    source: "/event/yoga-teacher-training-dunedin/",
    destination: "/teacher-trainings",
  },
  {
    source: "/event/yoga-teacher-training-winter-springs-oviedo",
    destination: "/teacher-trainings",
  },
  {
    source: "/event/yoga-teacher-training-winter-springs-oviedo/",
    destination: "/teacher-trainings",
  },
]

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return redirects.map(x => ({
      source: x.source,
      destination: x.destination,
      permanent: true,
    }))
  },
  async rewrites() {
    return []
  },
}
