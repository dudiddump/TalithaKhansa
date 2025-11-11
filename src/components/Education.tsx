const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold">Cyber University</h3>
            <p className="text-sm text-accent-light dark:text-accent-dark font-semibold mt-1">
              Bachelor’s Degree in Information Systems & Technology
            </p>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              5th Semester • GPA: 3.95
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
