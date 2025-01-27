import React, { useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";
import BorderMe from "@/components/Helpers/BorderMe";
import FloatingCard from "@/components/FloatingCard";
import Card from "@/components/Card";

const Index: React.FC = () => {
  let today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
  });
  const [selectedDate, setSelectedDate] = useState(today);
  const [seachText, setSearchText] = useState("Search");


  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        initial: date
          .toLocaleDateString("en-GB", { weekday: "short" })
          .charAt(0),
        date: date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
        }),
      });
    }
    return days;
  };

  const days = getNext7Days();

  return (
    <ScrollView className="mb-28">
      <View className="flex flex-row justify-between items-center m-1 p-2">
        <MotiView
          from={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{ loop: true, type: "timing", duration: 1000 }}
          className="rounded-full overflow-hidden"
        >
          <LinearGradient
            colors={["#ff4c6c", "#2c046c"]}
            style={{ padding: 15, alignItems: "center", borderRadius: 50 }}
          ></LinearGradient>
        </MotiView>
        <Text className="text-xl font-semibold">{selectedDate}</Text>
        <Ionicons name="calendar-outline" size={26} color="#ff4c6c" />
      </View>
      <View className="flex flex-row justify-around items-center m-1 p-2">
        {days.map((day, index) => (
          <View key={index}>
            <Text className="text-center m-1 text-sm font-thin ripple-gray-700">
              {today === day.date ? (
                <Text className="font-bold">Today</Text>
              ) : (
                day.initial
              )}
            </Text>
            <TouchableOpacity onPress={() => setSelectedDate(day.date)}>
              <View
                className={`rounded-full p-2 ${selectedDate === day.date ? "bg-gray-300" : ""
                  }`}
              >
                <Text
                  className={`text-center p-3 ${today === day.date ? "font-bold" : ""}`}
                >
                  {day.date.split(" ")[0]}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View className="flex justify-center items-center p-3 m-10 mt-14">
        <Text className="text-xl m-4">Period in</Text>
        <Text className="text-5xl font-semibold m-4">
          {31 - parseInt(selectedDate.split(" ")[0])} days
        </Text>
        <Text className="text-xl m-4">Low chance of getting pregnant</Text>
        <TouchableOpacity>
          <Text className="text-sm mt-11 bg-primary-300 rounded-full px-6 py-2 text-white">
            Log Period
          </Text>
        </TouchableOpacity>
      </View>
      <View className="m-5">
        <Text className="font-semibold text-xl">
          My daily Insights • {selectedDate}
        </Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FloatingCard
            className="bg-gray-200 items-center rounded-xl w-32 ml-1 h-40 pt-5 z-10"
          >
            <Text className="font-bold text-xl">Log Your Symptoms</Text>
            <Text className="bg-primary-300 rounded-full p-2 m-5"> + </Text>
          </FloatingCard>
          {Array.from({ length: 10 }).map((_, index) => (
            <View
              key={index}
              className="bg-gray-200  items-center border-2 border-primary-300 rounded-xl ml-1 p-0 mb-5"
            >
              <View className="text-white items-center border-2 border-white rounded-xl w-32  h-40 pt-5 bg-accent-100"  >
                <Text className="font-bold text-white text-xl">Card {index + 1}</Text>
                <Text className="p-5 text-white">
                  Lorem ipsum dolor {"\n"}
                  sit amet consectetur {"\n"}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <FloatingCard className="my-0 mx-2 py-4  z-20">
        <Text className="pl-4">
          Your pre-period days
        </Text>
        <View className="border-gray-300 p-0 w-full my-2 border-b-hairline" />
        <TouchableOpacity className="bg-gray-200 rounded-full flex flex-row items-center mx-4 my-3">
          <Ionicons name="search" size={24} color="gray" className="m-3" />
          <Text className="text-gray-600 text-lg">{seachText}</Text>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View
              key={index}
              className="border-2 border-primary-300  ml-1 p-0 mb-5 w-fit text-white items-center   rounded-xl  py-28 px-36 bg-accent-100"
            >
              <Text className="font-bold text-white text-xl">Card {index + 1}</Text>
              <Text className="p-5 text-white">
                Lorem ipsum dolor {"\n"}
                sit amet consectetur {"\n"}
              </Text>
            </View>
          ))}
        </ScrollView >
        <Text>
          Based On Your Current cycle
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View
              key={index}
            >
              <View className="ml-1">
                <View
                  className="border-2 border-primary-300    mb-5 w-fit text-white items-center rounded-xl p-10 bg-accent-100"
                >
                  <Text className="font-bold text-white text-xl">Card {index + 1}</Text>
                  <Text className="p-5 text-white">
                    Lorem ipsum dolor {"\n"}
                    sit amet consectetur {"\n"}
                  </Text>
                </View>
                <Text className="text-sm"> LOLO </Text>
                <Text className="text-sm"> x min read </Text>
              </View>
            </View>
          ))}
        </ScrollView >
        <TouchableOpacity className="bg-gray-200 rounded-full flex flex-row justify-center items-center mx-4 my-3">
          <Text className=" text-lg p-3 font-semibold ">See More</Text>
        </TouchableOpacity>
      </FloatingCard>

      <Card className="my-2 mx-2  py-4  z-20">
        <View className="flex flex-row justify-between items-center">
          <Text className="ml-4 font-semibold text-xl">Symptom Checker </Text>
          <Text className="text-gray-400 text-xl"> See all {">"} </Text>
        </View>
        <View className="border-gray-300 p-0 w-full my-2 border-b-hairline" />
        <View className="px-4">
          <View className="flex flex-row items-center">
            <View className="flex flex-row">
              <Ionicons name="warning" size={24} color="#ff9010" />
            </View>
            <Text className="text-gray-600 text-lg mt-2 ml-2">
              Did you know? <Text className="font-bold">70% of people with PCOS don't know they have it.</Text>
            </Text>

          </View>
          <Text className="mt-2">This hormonal imbalance creates problems in the ovaries. The ovaries make the egg that is released each month as part of a healthy menstrual cycle. With PCOS, the egg may not develop as it should or it may not be released during ovulation as it should be.
          </Text>
          <View className="bg-orange-100  rounded-lg my-2 p-4">
            <View className="flex flex-row justify-start items-center">
              <View className="">
                <Ionicons name="clipboard" size={30} color={"#ff4c6c"} className="mr-2" />
              </View>
              <View>
                <Text className="font-bold"> PCOS Self-assesment </Text>
                <View className="flex flex-row justify-start items-center">
                  <Ionicons name="time-outline" className="m-1 pt-1" size={12} color={"gray"} />
                  <Text className="text-sm"> typicaly 5 mins </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="bg-primary-300 rounded-full flex flex-row justify-center items-center  my-3">
              <Text className=" text-lg p-3 font-semibold text-white">
                Check your Symptoms
              </Text>
            </TouchableOpacity>
          </View>
          <Text className=" text-sm p-1 text-gray-300 "> NOTE: flo is npt a diagnostics tool </Text>
        </View>
      </Card>
      <Text className="text-xl ml-2 font-bold"> My cycles </Text>

      <Card className="my-2 mx-2  py-4  z-20">
        <View className="flex flex-row justify-between items-center">
          <Text className="ml-4 font-semibold text-xl"> Cycle History </Text>
          <Text className="text-gray-400 text-xl"> See all {">"} </Text>
        </View>
        <View className="border-gray-300 p-0 w-full my-2 border-b-hairline" />
        <View className="flex flex-row justify-between" >
          <View>
            <Text className="ml-4 font-semibold text-xl"> Current cycle: 27 days </Text>
            <Text className="ml-4  text-sm"> started Jan 1 </Text>
            <View className="flex flex-row ml-4">
              {Array.from({ length: 5 }).map((_, ind) => (<View style={{ backgroundColor: "red", borderRadius: "50%", padding: 4, margin: 1 }} key={ind} />))}
              {Array.from({ length: 3 }).map((_, ind) => (<View style={{ backgroundColor: "gray", borderRadius: "50%", padding: 4, margin: 1 }} key={ind} />))}
              {Array.from({ length: 11 }).map((_, ind) => (<View style={{ backgroundColor: "#00d293", borderRadius: "50%", padding: 4, margin: 1 }} key={ind} />))}
              {Array.from({ length: 8 }).map((_, ind) => (<View style={{ backgroundColor: "gray", borderRadius: "50%", padding: 4, margin: 1 }} key={ind} />))}
            </View>
          </View>
          <View  >
            <Text className="py-4 mx-2 text-3xl">
              {">"}
            </Text>
          </View>
        </View>
        <View className="border-gray-300 p-0 w-full my-2 border-b-hairline" />
        <View className="flex-1" >
          <View className="m-auto flex flex-row items-center"  >
            <Text className=" bg-primary-300 rounded-full px-2 text-white text-4xl">+</Text>
            <Text className=" text-primary-300 font-semibold text-md ml-2">Log previous cycles</Text>
          </View>
        </View>
      </Card >
      <Card className="my-2 mx-2  py-4  z-20">
        <Text className="ml-4 font-semibold text-xl"> Cycle Summary </Text>
        <View className="border-gray-300 p-0 w-full my-2 border-b-hairline" />
        <Text className=" ml-4">
          The more you share with us. the better Flo works {" "}
          <Text className="font-semibold">Log 2 or more periods</Text>{" "}
          to get  personalized analysis of most recent cycles
        </Text>
        <View className="border border-gray-300 p-3">
          <View className="flkx justify-between">
            <Text>Previous Cyles</Text>
          </View>
        </View>
        <View className="flex-1" >
          <View className="m-auto flex flex-row items-center"  >
            <Text className=" bg-primary-300 rounded-full p-2 px-8 text-white text-xl ">
              Log recent periods
            </Text>
          </View>
        </View>
      </Card >
    </ScrollView >
  );
};

export default Index;
