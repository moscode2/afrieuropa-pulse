import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "African Heritage Festival Berlin",
      date: "2025-03-15",
      time: "14:00 - 22:00",
      location: "Tempelhof Park, Berlin",
      description: "Celebrate African culture with music, food, and art from across the continent.",
      attendees: 500,
      type: "Festival"
    },
    {
      id: 2,
      title: "Diaspora Business Network Meetup",
      date: "2025-02-28",
      time: "18:30 - 21:00",
      location: "WeWork, Amsterdam",
      description: "Networking event for African entrepreneurs and professionals in the Netherlands.",
      attendees: 80,
      type: "Networking"
    },
    {
      id: 3,
      title: "Migration Rights Workshop",
      date: "2025-02-20",
      time: "10:00 - 16:00",
      location: "Online Event",
      description: "Legal workshop covering recent changes in EU immigration policies.",
      attendees: 200,
      type: "Workshop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Events & Community</h1>
          <p className="text-muted-foreground text-lg">
            Upcoming diaspora events, festivals, workshops, and online meetups across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-3">
                  {event.type}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>

              <Button className="w-full">
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default EventsPage;