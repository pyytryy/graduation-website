"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
   const journey = [
    {
      title: "2022",
      text: "Memasuki dunia FMIPA yang ternyata memiliki sisi yang tidak pernah disangka-sangka. Mulai awal membangun SOLIDARITAS dengan mempersiapkan dan bersama-sama melewati praktikum yang DUARR DUARR 🤧. Ada aja gebrakannya di setiap asisten",
      images: ["/journey/DSCF2984.JPG", "/journey/prist.jpg", "/journey/papan.jpg", "/journey/IMG-20220820-WA0023.jpg"]
    },
    {
      title: "Praktikum",
      text: "Laprak yang rasanya tak kunjung selesai. Inget banget ka Riris bantuin aku buat lapres mematikan fisika (thank you so much kak😘). Disana aku belum cukup akrab dengan lainnya, karena bertahan hidup di semester 1 aja alhamdulillah 🫠.",
      images: ["/journey/bio.jpg", "/journey/udang.jpeg", "/journey/with-ka-riris.jpg", "/journey/jaslab.jpg"]
    },
    {
      title: "Plot Twist",
      text: "Ditambah ngejar asisten yang gamau dikejar sampai asisten tersebut kabur dan jatuh ke selokan 👀 (ya maap). Tapi yaaa... asik sii dengan praktikum yang dilakukan tapi tidak dengan lapraknya, sepakat yak 👀. Inget banget bawa jangkrik hilang kaki satu buat dijadiin bahan penelitian",
      images: ["/journey/momen.JPG", "/journey/lapres.jpg",  "/journey/langit.jpg", "/journey/bawang.jpg" ]
    },
    {
      text: "Mungkin kata yang tepat adalah 'Berkesan'"
    },
    {
      title: "Perkuliahan",
      text: "Ngerjain tugas, kalo kalkulus suka nanya Rasni ama Welly, kalo Aljabar belajarnya sama Meyta xixi, minta ajarin lagi kalo ga paham (tengkyu so much gengs 🫶). Ngerjain project Simbada juga. Terus tengah malam telponan sama Dhita karena tugas pakai VBA excel yang ga selesai-selesai, dua duanya suka panikan, chaos banget kocak 🤝. Data mining dengan kelompok yang adudu untungnya bareng sama Andin jadi duo gacor 🫨.",
      images: ["/journey/simbada.jpg", "/journey/sakrab.jpg", "/journey/nugas.jpeg", "/journey/sekre.jpg"]
    },
    {
      title: "Organisasi",
      text: "Transisi masuk ke organisasi itu diawali dari DiesNat dan Mubes, disini aku sama Meta bener-bener dempet banget, ini mematikan banget gais ga kalah chaosnya. Dibantuin terus sama Meyta pokoknya 😋 (sampai sekarang si...). Sambil jadi praktikan jadi anggota organisasi plus jadi Asisten Praktikum ga kalah memusingkan yak. Lucunya dari kita yang ngeluh gamau lanjut lagi di organisasi buat dua periode. Eh malah jadi BPH 🫩.",
      images: ["/journey/rieman.jpg", "/journey/mubes.jpg", "/journey/diesnat.jpg", "/journey/sembako.jpg"]
    },
    {
      title: "Daily Life",
      text: "Banyak pusingnya, antara tugas, project, proker, asisten, sama jadi anggota organisasi dan anak-anak praktikum yang memusingkan dan lebih membingungkan karena ada aja tingkah lakunya 😵.",
      images: ["/journey/prak1.jpg", "/journey/apala.jpg", "/journey/asisten.jpg", "/journey/awal.jpg"]
    },
    {
      title: "Banyak hal yang terjadi",
      text: "Ga cukup sampai di sana. Banyak sekali momen yang rasanya sulit untuk dituliskan satu per satu. Belajar H-jam sebelum ujian. Bertanya ke sana-sini tentang materi yang bahkan tidak kami pahami pertanyaannya. Semoga kenangan indah tersimpan di penyimpanan masing-masing aja ya",
      images: [ "/journey/konversi.jpg", "/journey/sekre.jpg", "/journey/kemerdekaan.png", "/journey/comel.jpg"]
    },
    {
      title: "Tugas Akhir",
      text: "Dan our best camp yaitu Lab Matkom kecintaan kami semua (lab terbaik), tempat kami ngerjain praktikum sambil mengerjakan tugas akhir. Atau sekedar buat ngobrol aja zii.",
      images: [ "/journey/buset.jpg",  "/journey/mbkm.jpeg", , "/journey/diess.jpg", "/journey/sem.jpeg"]
    },
    {
      title: "Akhir Perjalanan",
      text: "Hingga sampai di tahap ini, aku benar-benar bersyukur dikelilingi oleh orang-orang baik seperti kalian, kebaikan yang tak mungkin bisa disebutkan satu-satu. Terima kasih aku ucapin kepada kalian yang sudah selalu memberikan dukungan dari bantuan yang selalu kalian usahakan untuk diberikan. Melalui bantuan hangat dari orang yang berbeda namun tetap saling mengasihi satu sama lain. Semoga Allah memberkahi kita selalu kebaikan dengan cintanya",
         images: ["/journey/prak2.JPG", "/journey/ujian.jpeg", "/journey/batik.jpg", "/journey/kiw.jpg", "/journey/nop.jpg", "/journey/berenang.jpeg"]
    },
   {
      title: "Sampai disini",
      text: "Semoga kita dapat bertemu dilain waktu yang akan datang dengan setiap journey yang berbeda-beda🤩, I will always pray for u guys🫶",
         images: ["/journey/prak2.JPG", "/journey/ujian.jpeg", "/journey/batik.jpg", "/journey/kiw.jpg", "/journey/nop.jpg", "/journey/berenang.jpeg"]
    }
  ];

  const peopleGroups = [
  {
    title: "Family",
    description: "The people who made all of this possible.",
    people: [
      {
        name: "Papa",
        image: "/papah.png",
      },
      {
        name: "Mama",
        image: "/mom.png",
      }
    ],
  },

  {
    title: "My Daily Survival Team",
    description: "The people who were there for almost everything.",
    people: [
      {
        name: "Melati",
        image: "/mey.PNG",
      },
      {
        name: "Dhita",
        image: "/dhita.jpg",
      },
      {
        name: "Riska",
        image: "/riris.jpg",
      },
      {
        name: "Andine",
        image: "/andin.JPG",
      },
      {
        name: "Rasni",
        image: "/rasni.png",
      },
      {
        name: "Welly",
        image: "/welly.jpg",
      },
    ],
  },

  {
    title: "The Ones Who Stayed",
    description: "Before university happened.",
    people: [
      {
        name: "Nopi",
        image: "/nopi.png",
      },
      {
        name: "Imah",
        image: "/imah.jpeg",
      },
      {
        name: "Amal",
        image: "/amal.jpg",
      },
    ],
  },
];
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
    const submitAttendance = async (status: string) => {
    if (!name.trim()) {
      alert("Isi nama dulu ya 🌸");
      return;
    }

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSc0r5bCAmOGqIbRj6Uak10RGtpQOM9dMfqv6zPwMGVM7UAqjg/formResponse";

    const data = new FormData();

    data.append("entry.1577438719", name);
    data.append("entry.2105454658", status);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setResponse(status);
      setName("");

    } catch (error) {
      alert("Oops, something went wrong 😭");
    }
    };

  const playClick = () => {
      const audio = new Audio("/dragon-studio-pop-402324.mp3");
      audio.play();
    };

  const onMouseEnterFirst=()=> {
      const audio = new Audio("/dragon-studio-pop-402324.mp3");
            audio.play();
    };
  const onMouseEnterNo = () => {
      const audio = new Audio("/studio-audience-awwww-sound-fx.mp3");
      audio.play();
    };
  
  const onMouseEnterYes= () => {
      const audio = new Audio("/shidenbeatsmusic-sound-effect-twinklesparkle-115095.mp3");
      audio.play();
    };

  useEffect(() => {
    const audio = new Audio("/music.mp3");

    audio.volume = 0.4;
    audio.loop = true;

    audio.play().catch((err) => {
      console.log("Autoplay blocked:", err);
    });
  }, []);
      

  return (
    <main className="min-h-screen bg-[#F9E9EE] relative overflow-hidden">
    {/* bg overall, HERO*/}

      <section className="relative min-h-screen flex items-center px-20">
        {/* Slide Pertama */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute bottom-10 left-140 h-72 w-72 rounded-full bg-green-300/30 blur-3xl z-30" />
        <div className="w-1/2">
          {/* Background Graduation Image */}
          <div className="absolute top-0 right-0 h-full w-1/2">
            <img
              src="/graduation.png"
              alt="Graduation"
              className="
                h-full
                w-full
                object-cover
                opacity-50
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-l
                from-transparent
                via-[#F9E9EE]/40
                to-[#F9E9EE]
              "
            />
            
          </div>
          {/* Kotak */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="backdrop-blur-xl bg-white/20 border border-white/100 rounded-[40px] shadow-2xl p-12"

>
            <h1 className="text-6xl font-bold text-[#D97093]">
              Pita Gradu-ATE
            </h1>

            <h2 className="text-6xl font-bold text-[#8BAA88]">
              Era
            </h2>

            <p className="mt-6 text-gray-700 text-lg max-w-md">
              A small celebration for a big milestone.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onMouseEnter={onMouseEnterFirst}
                onClick={() => {
                  playClick();
                  document
                    .getElementById("journey")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
                className="bg-[#A8BEA4]
                text-white
                backdrop-blur-md
                border 
                border-white/100 
                px-6
                py-3
                rounded-full
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
              "
              >
                Pita Journey
              </button>

              <button
                onMouseEnter={onMouseEnterFirst}
                onClick={() => {
                  playClick();
                  document
                    .getElementById("photoshoot")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
                className="bg-[#D97093]/30
                text-white 
                backdrop-blur-md 
                border 
                border-white/40 
                px-6 
                py-3 
                rounded-full
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
                "
              >
                The Invitation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="journey" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#D97093]"
          >
            How It All Started
          </motion.h2>
            <div className="mt-30 space-y-30">
              {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-40 items-center"
              >
                {/* Kiri */}
                <div>
                  <h3 className="text-3xl font-bold text-[#8BAA88]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-2xl leading-relaxed text-gray-700 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>

                {/* Kanan */}
                <div className="grid grid-cols-2 gap-4">
                  {item.images?.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        rounded-3xl
                        shadow-xl
                        border-4
                        border-white
                      "
                      style={{
                        top: `${imageIndex * 100}px`,
                        left: `${imageIndex * 100}px`,
                        transform: `rotate(${
                          imageIndex % 2 === 0 ? "-8deg" : "8deg"
                        })`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
            </div>
        </div>
      </section>
      

      <section className="py-40 px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="text-4xl text-gray-600"
          >
            And somehow...
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="
              mt-20
              text-8xl
              md:text-9xl
              font-bold
              text-[#D97093]
            "
          >
            We Made It.
          </motion.h2>
        </motion.div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-bold text-[#D97093] text-center"
          >
            People Who Made University Feel Better
          </motion.h2>

          <p className="mt-6 text-center text-xl text-gray-600">
            Thank you for being part of the story.
          </p>

          <div className="mt-24 space-y-32">

            {peopleGroups.map((group, groupIndex) => (
              <div key={groupIndex}>

                <h3 className="text-4xl font-bold text-[#8BAA88]">
                  {group.title}
                </h3>

                <p className="mt-3 text-gray-600 text-lg">
                  {group.description}
                </p>

                <div className="mt-10 flex justify-center gap-8 flex-wrap">

                  {group.people.map((person, personIndex) => (
                    <motion.div
                      key={personIndex}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: personIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="
                        w-[300px]
                        backdrop-blur-xl
                        bg-white/20
                        border
                        border-white/50
                        rounded-[30px]
                        overflow-hidden
                        shadow-xl

                        transition-all
                        duration-300

                        hover:scale-105
                        hover:shadow-2xl
                      "
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        className="
                          w-full
                          h-64
                          object-cover
                        "
                      />

                      <div className="p-6">
                        <h4 className="text-2xl font-bold text-[#D97093]">
                          {person.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section id="photoshoot" className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-6xl font-bold text-[#D97093]">
           Dan...
          </h2>

          <p className="mt-8 text-2xl text-gray-700">
            Karena perjalanan ini tidak akan terasa lengkap tanpa kalian,
            aku mengundang kalian untuk merayakan momen ini bersamaku.
          </p>

          <div className="
            mt-16
            backdrop-blur-xl
            bg-white/20
            border
            border-white/50
            rounded-[40px]
            p-12
            shadow-2xl
          ">
            <h3 className="text-4xl font-bold text-[#8BAA88]">
              Graduation Photoshoot 📸
            </h3>

            <div className="mt-8 space-y-4 text-xl text-gray-700">
              <p>📍 Hotel Puri Senyiur</p>
              <p>⏰ Minggu, 21 Juni 2026. 08.30 WITA</p>
              <p> (kalo sebisa sebelum itu ya gais ngumpulnyaa, biar bisa foto ramean lengkap semua yaww)</p>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-3xl font-bold text-[#D97093]">
              "Apa yang harus dibawa?"
            </h4>

            <p className="mt-6 text-xl text-gray-700">
              Cukup bawa diri kalian saja yang cantik paripurna mengalahkan sinarnya mentari 💛
            </p>

            <p className="mt-2 text-xl text-gray-700">
              Dan sangat disarankan untuk mengenakan busana berwarna cream/putih/ivory/abu-abu terang🌸
            </p>
          </div>

        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-bold text-[#D97093]"
          >
            Will You Be There?
          </motion.h2>

          <p className="mt-6 text-xl text-gray-700">
            I'd love to celebrate this moment with you 💛
          </p>

          <div
            className="
              mt-12
              backdrop-blur-xl
              bg-white/20
              border
              border-white/50
              rounded-[40px]
              p-10
              shadow-2xl
            "
          >
            {response === "Yes" ? (
              <div className="text-center py-8">
                <h3 className="text-4xl font-bold text-[#D97093]">
                  WAHHH MANTAP BANGETT🌸
                </h3>

                <p className="mt-4 text-xl text-gray-700">
                  Sampai jumpa di tempat ya!
                  Terima kasih sudah menjadi bagian dari memori ini💛

                </p>
              </div>
            ) : response === "No" ? (
              <div className="text-center py-8">
                <h3 className="text-4xl font-bold text-[#8BAA88]">
                  Yahh... Aku bakalan kangen sama kamu 😭
                </h3>

                <p className="mt-4 text-xl text-gray-700">
                  Terima kasih ya konfirmasinya, semoga dapat berjumpa di lain waktu💛
                </p>
              </div>
            ) : (
              <>
          

            <input
              type="text"
              placeholder="Masukkan nama kamu cantik"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                rounded-2xl
                px-5
                py-4
                bg-white/30
                border
                border-white/70
                outline-none
                text-lg
                text-gray-700
                placeholder:text-[#D97093]
                shadow-lg
              "
            />

            <div className="mt-8 flex justify-center gap-4">
              
              <button
                onMouseEnter={onMouseEnterYes}
                onClick={() => {
                  playClick();
                  submitAttendance("Yes");
                }}
                className="
                  bg-[#D97093]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  shadow-lg

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-2xl
                "
              >
                PASTINYA 🌸
              </button>

              <button
                onMouseEnter={onMouseEnterNo}
                onClick={() => {
                  playClick();
                  submitAttendance("No");
                }}
                className="
                  bg-white/40
                  text-gray-700
                  border
                  border-white/60
                  px-8
                  py-4
                  rounded-full

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-2xl
                "
              >
                Aduh... ga bisa 😭
              </button>

            </div>
          </>
                )}
          </div>
        </div>
      </section>
    </main>
  );
}
