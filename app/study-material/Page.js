 "use client";
 import React from "react";
export default function StudyMaterialPage() {
  return (
    <main className="p-6 bg-gray-100 mt-12">

      {/* Hero Image Section */}
      <div className="dark rounded-2xl mb-10">

        <div className="container mx-auto p-6">
          <div className="inner">

            <section className="space-y-6 mt-5">
              <div>
                <h6 className="font-Montserrat, sans-serif font-thin text-2xl ">Complete and relevant content</h6>
                <p className="font-Montserrat, sans-serif text-base">
                  To become fluent in English, you need to master all its components:
                  pronunciation, grammar, and vocabulary. You also need to practise all four
                  skills: reading, writing, listening, and speaking.
                </p>
                <p>
                  We have divided your online course into three categories: pronunciation,
                  grammar, and conversation. However, we have made sure that whichever category a
                  particular lesson focuses on, it also allows you to review and practise relevant
                  content from the other two categories. In this way, every lesson helps you to
                  improve your English grammar, vocabulary, and pronunciation simultaneously. We
                  have also made sure that you get the opportunity to practise all four skills in
                  every lesson.
                </p>
              </div>

              <div>
                <h6 className="font-semibold text-lg">Graded</h6>
                <p>
                  Another important aspect of a self-study course is that the content needs to be
                  graded, going from easy to more difficult.
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    The lessons in each category follow a logical sequence of easy to more
                    difficult, with difficulty levels clearly marked for you.
                  </li>
                  <li>More advanced lessons revise and build on the contents of earlier lessons.</li> 
                </ul>
              </div>

              <div>
                <h6 className="font-semibold text-lg">Clear explanations</h6>
                <ul className="list-disc ml-6">
                  <li>Simple English</li>
                  <li>Tables</li>
                  <li>Timelines</li>
                  <li>Colour coding</li>
                  <li>Tips &amp; notes</li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold text-lg">Meaningful examples</h6>
                <ul className="list-disc ml-6">
                  <li>Easily clarify the point you are learning.</li>
                  <li>Include useful daily English expressions.</li>
                  <li>Perfectly match the language level you are studying.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Light Section */}
      <div className="light bg-white rounded-2xl p-6">
        <div className="container mx-auto">
          <div className="inner space-y-6">
            <h5 className="text-xl font-semibold">What do I learn in each type of lesson?</h5>

            <div>
              <h6 className="font-semibold text-lg">Pronunciation</h6>
              <p>
                In pronunciation lessons, you learn about the sounds, stress patterns, and
                intonation patterns of Standard British English (Received Pronunciation).
                Understanding the sound system of the English language is essential in developing
                good listening skills so you can understand native speakers, movies, news, and
                other broadcasts in English. You can then use these resources to expand your active
                vocabulary. It is also important for you to develop a clear pronunciation yourself,
                and our self-study course gives you many opportunities to actively work on your own
                pronunciation.
              </p>
            </div>

            <div>
              <h6 className="font-semibold text-lg">Grammar</h6>
              <p>
                In Grammar lessons, you learn all the important grammatical structures in English.
                Mastering these is necessary for writing English fluently. A good knowledge of
                grammar also improves your reading and listening skills. It is true that absolute
                grammatical accuracy is not essential for speaking fluently. However, a good
                knowledge of grammatical structures can definitely increase your self-confidence.
                When we do not know the grammar rules, we may think we are making too many mistakes,
                and we can lose our confidence to speak English in front of others. On the
                contrary, when we know the rules, we are able to recognise and correct our mistakes,
                and this is a great boost to our self-confidence.
              </p>
            </div>

            <div>
              <h6 className="font-semibold text-lg">Conversation</h6>
              <p>
                In conversation lessons, you focus on expanding your range of vocabulary and
                expressions in a variety of everyday contexts. Learning English vocabulary in
                situational dialogues reduces the need for translation and ensures that you can use
                the vocabulary you learn reflexively. All the situational dialogues in the course
                have been voice-recorded so you can improve your listening skills and pronunciation
                at the same time as you learn new vocabulary and expressions.
              </p>
            </div>
          </div>
        </div>

       <div className="text-center mt-8">
  <a
    href="https://anglo-link.com/features/"
    className="inline-block text-blue-400 px-5 py-2 rounded-full transition"
  >
    View all features
    <img
      src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' fill='%2337aadc'/><path d='M0 0h24v24H0z' fill='none'/></svg>"
      alt="arrow"
      className="inline-block ml-2 w-6 h-6 align-middle"
    />
  </a>
</div>

      </div>
    </main>
  );
}
