using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace CSLUBaselineConstruction
{
    public class BaselineInputData 
    {
        public string wavFileId;
        public string intenededPhrase;
        public bool correct;
    }

    public class Startup
    {
        Dictionary<string, string> intendedPhraseMap = new Dictionary<string, string>();
        ArrayList baselineInputData = new ArrayList();

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            string[] lines = File.ReadAllLines("/Users/Contence/CSLU_kids/docs/all.map");

            foreach(var line in lines) 
            {
                if(line.Length > 4)
                {
                    intendedPhraseMap.Add(line.Substring(0, 2).ToLower(), line.Substring(4, line.Length - 4 - 1));// map is probably built okay
                }
            }

            //File.WriteAllText("intendedPhraseMap2.json", intendedPhraseMap); use this if you want to print the map again for use in other files

            DirSearch("/Users/Contence/CSLU_kids/speech");

            Console.WriteLine(baselineInputData.Count);

            int counter = 0;
            foreach (BaselineInputData baselineInput in baselineInputData)
            {
                Console.WriteLine(counter++);
                string[] files = Directory.GetFiles("/Users/Contence/CSLU_kids/verify/scripted", baselineInput.wavFileId.Split('.')[0] + ".txt", SearchOption.AllDirectories);

                if(files.Length > 0) 
                {
                    var correctLabel = File.ReadAllText(files[0]);

                    if (correctLabel.Contains("1"))
                    {
                        baselineInput.correct = true;
                    }
                    else
                    {
                        baselineInput.correct = false;
                    }
                }
            }

            string json = Newtonsoft.Json.JsonConvert.SerializeObject(baselineInputData.ToArray());

            File.WriteAllText("baselineInputData.txt", json);
        }


        void DirSearch(string sDir)
        {
            try
            {
                foreach (string d in Directory.GetDirectories(sDir))
                {
                    foreach (string f in Directory.GetFiles(d))
                    {
                        var fileName = f.Substring(f.LastIndexOf('/') + 1, f.Length - f.LastIndexOf('/') - 1);

                        var newBaseLineData = new BaselineInputData();

                        string tryValue;
                        if (intendedPhraseMap.TryGetValue(fileName.Substring(5, 2), out tryValue))
                        {
                            newBaseLineData.intenededPhrase = tryValue;
                        }
                        //else 
                        //{ ds store and files.txt
                        //    Console.WriteLine(fileName);
                        //    Console.WriteLine("DID NOT FIND LOOK UP!!!!!!");
                        //}
                        newBaseLineData.wavFileId = fileName;

                        baselineInputData.Add(newBaseLineData);
                    }
                    DirSearch(d);
                }
            }
            catch (System.Exception excpt)
            {
                Console.WriteLine(excpt.Message);
            }
        }
    }
}
