import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  CreditCard,
} from "lucide-react";

const courses = ["Web Development", "UI/UX Design", "Data Science"];

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // API integration or validation logic can go here
  };

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Start Your Learning Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of successful graduates and transform your career
            </p>
          </div>

          <div className="bg-gradient-card border border-border/20 shadow-card p-8 rounded-lg">
            <div className="text-center mb-6">
              <div className="text-2xl text-foreground flex items-center justify-center gap-2">
                <GraduationCap className="text-primary" />
                Enroll Now
              </div>
              <h2 className="text-muted-foreground">
                Fill out this form to secure your spot in our exclusive programs
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div key={field} className="space-y-2">
                    <label htmlFor={field} className="text-foreground">
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        id={field}
                        type="text"
                        placeholder={field === "firstName" ? "John" : "Doe"}
                        value={formData[field]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field]: e.target.value })
                        }
                        className="pl-10 bg-background/50 border border-border/50 focus:border-primary w-full py-2 rounded"
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-10 bg-background/50 border border-border/50 focus:border-primary w-full py-2 rounded"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-foreground">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+977 9844556454"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="pl-10 bg-background/50 border border-border/50 focus:border-primary w-full py-2 rounded"
                    required
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-2">
                <label htmlFor="course" className="text-foreground">Select Course</label>
                <select
                  id="course"
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className="bg-background/50 border border-border/50 focus:border-primary w-full py-2 rounded text-muted-foreground"
                  required
                >
                  <option value="">Choose your course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <label htmlFor="experience" className="text-foreground">Experience Level</label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="bg-background/50 border border-border/50 focus:border-primary w-full py-2 rounded text-muted-foreground"
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0–1 years)</option>
                  <option value="intermediate">Intermediate (1–3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: e.target.checked,
                    })
                  }
                  className="border border-border/50"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <span className="text-primary hover:underline cursor-pointer">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-primary hover:underline cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 text-black bg-blue-300 rounded hover:bg-primary/90 transition"
              >
                Enroll
              </button>
            </form>

            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;